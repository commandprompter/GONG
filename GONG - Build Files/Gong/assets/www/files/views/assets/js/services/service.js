/*
 * Service settings
 */
var Facebook_Settings = {
    "client_id": "655974494523764",
    "project_id": "8c382d2d-e784-4284-81c6-930973e869da"
}

/*
 * Services
 */

var Facebook_MeService = new Apperyio.RestService({
    'url': 'https://graph.facebook.com/v2.2/me?fields=id,name,gender,events,work,education,location,picture',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Facebook_Settings
});

var Facebook_EventService = new Apperyio.RestService({
    'url': 'https://graph.facebook.com/v2.2/me?fields=id,name,gender,events,work,education,location,picture',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Facebook_Settings
});

var Facebook_FindEventService = new Apperyio.RestService({
    'url': 'https://graph.facebook.com/v2.2/me?fields=id,name,gender,events,work,education,location,pictur',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',

    'serviceSettings': Facebook_Settings
});

var Facebook_PostService = new Apperyio.RestService({
    'url': 'https://graph.facebook.com/me/feed',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',
});