export const addToList = (video) => ({
    method: 'POST',
    url: `/api/videos/${video.id}/list`,
    data: {video}
})

export const deleteFromList = (videoId) => ({
    method: 'DELETE',
    url: `/api/videos/${videoId}/list`
})