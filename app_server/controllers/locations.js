/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'online shopping',
    pageHeader: {
    title: 'Shivas',
    strapline: 'Find places to shop!'
    },
    locations: [{
    name: 'OOKO KAKA',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['KIDSWEAR', 'MENSWEAR'],
    distance: '2Km'
    },{
    name: 'BAD BOYZZ',
    address: 'anurag pakka galli,vachey anutunaa',
    rating: 4,
    facilities: ['kidswear'],
    distance: '2km'
    },{
    name: 'ROWDY ERA',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 2,
    facilities: ['T-SHIRTS', 'SHIRTS'],
    distance: '2Km'
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-addreview', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };