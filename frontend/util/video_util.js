export const fetchAllVideos = () => (
    $.ajax({
        method: 'GET',
        url: 'api/videos'
    })
);


export const fetchVideo = (video) => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${video.id}`,
        // data: { video }
    })
)