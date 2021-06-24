export const fetchSteps = function () {
    return $.ajax({
        method: 'get',
        url: '/api/steps'
    })
}

export const createStep = function (step) {
    return $.ajax({
        method: 'post',
        url: '/api/steps',
        data: {
            step: step
        }
    })
}

export const updateStep = function (step) {
    return $.ajax({
        method: 'patch',
        url: `/api/steps/${step.id}`,
        data: {
            step: step
        }
    })
}

export const removeStep = function (step) {
    return $.ajax({
        method: 'delete',
        url: `/api/steps/${step.id}`,
    })
}