
import { useState } from 'react';
import api from '@/lib/api.js';

export default function useNews() {
    const [news, setNews] = useState([]);
    const [preferedNews, setPreferedNews] = useState([]);
    const [searchedNews, setSearchedNews] = useState(false);
    const [preferencesEmpty, setPreferencesEmpty] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [preferenceOptions, setPreferenceOptions] = useState({
        sources: [],
        categories: [],
        authors: []
    });

    const fetchNews = (pathname, searchText = '') => {
        if (searchText) {
            setIsSearching(true);
            setNews([]);
            setPreferedNews([]);
            setSearchedNews(false);
        } else {
            setIsSearching(false);
        }

        const endpoint = pathname == '/my-feed'
                        ? 'news/personalized?search=' + searchText
                        : 'news?search=' + searchText;

        api.get(endpoint)
            .then(data => {
                if (searchText) {
                    setSearchedNews(data.data);
                    return;
                }

                if (pathname == '/my-feed') {
                    setPreferedNews(data.data);
                } else {
                    setNews(data.data)
                }
            }).catch(error => {
                if (
                    error.response.status == 422
                    && error.response.data?.message == 'User has not set any news preferences.'
                  ) {
                    setPreferencesEmpty(true);
                }
            });
    }

    const fetchPreferenceOptions = () => {
        api.get('preferences')
            .then(data => {
                setPreferenceOptions(data)
            }).catch(error => {
            });
    }

    const disableSearching = () => {
        setIsSearching(false);
        fetchNews(window.location.pathname);
    }

    return [
        news,
        preferedNews,
        preferenceOptions,
        fetchNews,
        fetchPreferenceOptions,
        preferencesEmpty,
        isSearching,
        disableSearching,
        searchedNews
    ];
}