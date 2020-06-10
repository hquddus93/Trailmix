export const addToList = (video) => (
    $.ajax({
        method: 'POST',
        url: `/api/videos/${video.video_id}/list`,
        data: {video}
    })
)

export const deleteFromList = (videoId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}/list`
    })
)