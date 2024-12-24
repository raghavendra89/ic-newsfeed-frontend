
import { useState } from 'react';
import api from '@/lib/api.js';

export default function useNews() {
    const [news, setNews] = useState([]);

    const fetchNews = () => {
        api.get('news')
            .then(data => {
                setNews(data.data)
            });
    }

    return [news, fetchNews];
}