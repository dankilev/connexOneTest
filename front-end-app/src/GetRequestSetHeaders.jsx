import React from 'react';

class GetRequestSetHeaders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingEpoch: 'visible',
            loadingMetricsData: 'visible',
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
                .then(data => {
                    scope.setState({ loadingEpoch: 'hidden' });
                    scope.setState({ lastEpoch: data.properties.epoch.description })
                });
            fetch('http://localhost:3001/metrics', { headers })
                .then(response => response.text())
                .then(html => {
                    scope.setState({ loadingMetricsData: 'hidden' });
                    scope.setState({ metricsData: html })
                });
        }
        updateData(this);
        setInterval(() => this.setState({ epochDiff: (Math.round(new Date() / 1000) - this.state.lastEpoch)}), 1000);
        setInterval(() => updateData(this), 30000);
    }

    render() {
        const { loadingEpoch, loadingMetricsData, lastEpoch, epochDiff, metricsData } = this.state;

        const stopWatch = function (sec) {
            return new Date(sec * 1000).toISOString().substr(11, 8)
        }

        return (
            <div className="flex-vertical">
                <div className="flex-child">
                    <div class="loader-lastEpoch" style={{visibility: loadingEpoch}}>
                        Loading Epoch
                    </div>
                    <div className="lastEpochCls">
                        {lastEpoch}
                    </div>
                    <div className="epochDiffCls">
                        {stopWatch(epochDiff)}
                    </div>
                </div>
                <div className="flex-child">
                    <div class="loader-metricsDataCls" style={{visibility: loadingMetricsData}}>
                        Loading Metrics Data
                    </div>
                    <div className="metricsDataCls">
                        <pre>{metricsData}</pre>
                    </div>
                </div>
          </div>
        );
    }
}

export { GetRequestSetHeaders };