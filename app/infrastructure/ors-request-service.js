angular.module('orsApp.request-service', []).factory('orsRequestService', ['$q', '$http', 'orsUtilsService', ($q, $http, orsUtilsService) => {
    /**
     * Requests geocoding from ORS backend
     * @param {String} requestData: XML for request payload
     */
    let orsRequestService = {};
    orsRequestService.geocodeRequests = {};
    orsRequestService.geocodeRequests.aaRequests = [];
    orsRequestService.geocodeRequests.routeRequests = [];
    /** 
     * Replaces request if new one is fired on same index
     * @param {Object} request: xhr request
     * @param {number} idx: WP idx
     * @param {string} panel: Current requests que
     */
    orsRequestService.geocodeRequests.updateRequest = (request, idx, requestsQue) => {
        console.log(request, idx, requestsQue, orsRequestService.geocodeRequests)
        if (typeof orsRequestService.geocodeRequests[requestsQue][idx] === 'undefined') {
            orsRequestService.geocodeRequests[requestsQue][idx] = request;
        } else {
            orsRequestService.geocodeRequests[requestsQue][idx].cancel("Cancel last request");
            orsRequestService.geocodeRequests[requestsQue][idx] = request;
        }
    };
    /** 
     * Removes requests from the que, used if waypoints are removed from list
     * @param {number} idx: WP idx
     * @param {string} requestsQue: Current requests que
     */
    orsRequestService.geocodeRequests.removeRequest = (idx, requestsQue) => {
        if (typeof orsRequestService.geocodeRequests[requestsQue][idx] !== 'undefined') {
            orsRequestService.geocodeRequests[requestsQue][idx].cancel("Cancel last request");
            orsRequestService.geocodeRequests[requestsQue].splice(idx, 1);
        }
    };
    /** cancels all requests if there are any outstanding */
    orsRequestService.geocodeRequests.clear = () => {
        console.info(orsRequestService.geocodeRequests.routeRequests)
        for (let req of orsRequestService.geocodeRequests.routeRequests) {
            console.info(req)
            if ('cancel' in req) req.cancel("Cancel last request");
        }
        for (let req of orsRequestService.geocodeRequests.aaRequests) {
            if ('cancel' in req) req.cancel("Cancel last request");
        }
    };
    orsRequestService.geocode = (requestData) => {
        var url = orsNamespaces.services.geocoding;
        var canceller = $q.defer();
        var cancel = function(reason) {
            canceller.resolve(reason);
        };
        var promise = $http.post(url, requestData, {
            timeout: canceller.promise
        }).then(function(response) {
            return response.data;
        });
        return {
            promise: promise,
            cancel: cancel
        };
    };
    /**
     * Processes response
     * @param {Object} response: response data
     */
    orsRequestService.processResponse = (response) => {
        var data = response.data;
        return data;
    };
    return orsRequestService;
}]);