import { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "@/lib/api.js";
import {UserContext} from '@/lib/UserContext.js';
import { useContext } from "react";

export default function Admin() {
  const user = useContext(UserContext);

  const [adminData, setAdminData] = useState({
    news_sources: {
      'NewsAPI': 0,
      'TheGuardian': 0,
      'NyTimes': 0,
      'NewsData': 0,
    },
    total_users: 0
  });
  const [status, setStatus] = useState('')

  useEffect(() => {
    api.get('admin/data')
      .then(data => {
        setAdminData(data);
      });
  }, []);

  const pullArticles = (source) => {
    setStatus('Pulling articles from ' + source + '...');

    api.post('admin/pull-news', {'source': source})
      .then(data => {
        setStatus('Pulled ' + data.count + ' articles from' +  source);

        let currentData = {...adminData};
        currentData['news_sources'][source] += parseInt(data.count) || 0;
        setAdminData(currentData);

        setTimeout(() => {
          setStatus('')
        }, 3000)
      })

    setTimeout(() => {
      setStatus('')
    }, 5000)
  }

  if (user && ! user.is_admin) {
    return (
      <>
        <div className="row">
          <div className="col-12 text-center">
            <h3>Only admins can access this page.</h3>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2>Total users count: {adminData?.total_users}</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>News API Sources:</h2>

          <div className="mb-2 text-center text-primary">
            <strong>{ status }</strong>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>News API Source</th>
                <th>Articles Pulled</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(adminData.news_sources).map(newsSource => (
                  <tr>
                    <td>{ newsSource }</td>
                    <td>{ adminData.news_sources[newsSource] }</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => pullArticles(newsSource)}>
                        Pull Articles
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}