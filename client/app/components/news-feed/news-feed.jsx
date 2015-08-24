import './news-feed.less';
import template from './news-feed.template.jsx';
import React from 'react/addons';
import jsonp from 'jsonp';

export default class NewsFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        let latestId,
            items = [];

        // Load data function
        let loadFeed = () => {
            jsonp(this.props.feedUrl, {limit: this.props.limit, from_id: latestId}, (err, data) => {

                    if (err) {

                    } else {
                        if (data.length > 0) {

                            // Add new items to the beginning of feed array
                            items.unshift.apply(items, data);

                            // Remove last elements
                            items.splice(this.props.limit, data.length);

                            this.setState({items});

                            // Save last feed item entity_id
                            latestId = data[0].entity_id;
                        }
                    }
                }
            )
        };

        loadFeed();
        setInterval(loadFeed, this.props.interval);
    }

    render() {
        return template.bind(this)();
    }
}

NewsFeed.defaultProps = {
    feedUrl: 'http://api.massrelevance.com/reccosxof/matchtrax_hashclash_featured_tweets.json',
    interval: 5000,
    limit: 10
};