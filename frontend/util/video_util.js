export const fetchAllVideos = () => (
    $.ajax({
        method: 'GET',
        url: 'api/videos'
    })
);


export const fetchVideo = (videoId) => {
    debugger
    return (
        $.ajax({
            method: 'GET',
            url: `api/videos/${videoId}`,
            // data: { video }
        })
    )
};


export const searchVideos = (keyword) => (
    $.ajax({
        method: 'GET',
        url: `api/videos`,
        data: { keyword }
    })
)