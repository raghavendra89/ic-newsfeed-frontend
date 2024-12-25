
import { useState } from 'react';
import api from '@/lib/api.js';

export default function useNews() {
    const [news, setNews] = useState([]);
    const [preferedNews, setPreferedNews] = useState([]);
    const [preferencesEmpty, setPreferencesEmpty] = useState(false);
    const [preferenceOptions, setPreferenceOptions] = useState({
        sources: [],
        categories: [],
        authors: []
    });

    const fetchNews = (pathname) => {
        const endpoint = pathname == '/my-feed'
                        ? 'news/personalized'
                        : 'news';

        api.get(endpoint)
            .then(data => {
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

    return [
        news,
        preferedNews,
        preferenceOptions,
        fetchNews,
        fetchPreferenceOptions,
        preferencesEmpty
    ];
}