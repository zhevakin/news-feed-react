import React from 'react/addons';

export default function() {

    return (
        <div className="news-feed">
            <div className="news-feed-list">
                {this.state.items.map(function (item) {
                    return (
                        <div className="news-feed-item">
                            <div className="news-feed-user">{item.user.name}</div>
                            <div className="news-feed-text">{item.text}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

};