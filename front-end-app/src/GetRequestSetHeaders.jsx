import React from 'react';

class GetRequestSetHeaders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastEpoch: null,
            epochDiff: null,
            metricsData: null
        };
    }

    componentDidMount() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'mysecrettoken' }
        const updateData = function (scope) {
            fetch('http://localhost:3001/time', { headers })
                .then(response => response.json())
                .then(data => scope.setState({ lastEpoch: data.properties.epoch.description }));
            fetch('http://localhost:3001/metrics', { headers })
                .then(response => response.text())
                .then(html => scope.setState({ metricsData: html }));
        }
        updateData(this);
        setInterval(() => this.setState({ epochDiff: (Math.round(new Date() / 1000) - this.state.lastEpoch)}), 1000);
        setInterval(() => updateData(this), 30000);
    }

    render() {
        const { lastEpoch, epochDiff, metricsData } = this.state;

        const stopWatch = function (sec) {
            return new Date(sec * 1000).toISOString().substr(11, 8)
        }

        return (
            <div className="flex-container">
                <div className="flex-child">
                    <div className="lastEpochCls">
                        {lastEpoch}
                    </div>
                    <div className="epochDiffCls">
                        {stopWatch(epochDiff)}
                    </div>
                </div>
                <div className="flex-child">
                    <div className="metricsDataCls">
                        <pre>{metricsData}</pre>
                    </div>
                </div>
          </div>
        );
    }
}

export { GetRequestSetHeaders };