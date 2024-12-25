
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

    const fetchNews = (pathname, searchText = '', filters = null) => {
        if (searchText || filters) {
            setIsSearching(true);
            setNews([]);
            setPreferedNews([]);
            setSearchedNews(false);
        } else {
            setIsSearching(false);
        }

        let filterString = '';
        if (filters) {
            for (var i = 0; i < filters.sources.length; i++) {
                filterString += '&sources[]=' + filters.sources[i];
            }

            for (var i = 0; i < filters.categories.length; i++) {
                filterString += '&categories[]=' + filters.categories[i];
            }
            filterString += '&from_date=' + filters['from_date'];
            filterString += '&to_date=' + filters['to_date'];
        }

        const endpoint = pathname == '/my-feed'
                        ? 'news/personalized?search=' + searchText + filterString
                        : 'news?search=' + searchText + filterString;

        api.get(endpoint)
            .then(data => {
                if (searchText || filters) {
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