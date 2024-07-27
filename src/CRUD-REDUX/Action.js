export const INSERT = "INSERT"
export const READ = "READ"
export const UPDATE = "UPDATE"
export const DELETE = "DELETE"

export const insert = (data) => {
    return {
        type: INSERT,
        payload: data
    }
}
export const read = () => {
    return {
        type: READ
    }
}
export const update = (id, data) => {
    return {
        type: UPDATE,
        payload: {id, data}
    }
}
export const deleteData = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}