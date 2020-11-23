export default (data) => {
    switch (data.name) {
        case 'perfect':
            return { color: '#54F511', value: data.val }
        case 'medium':
            return { color: '#FFD95B', value: data.val }

        case 'bad':
            return { color: '#F26368', value: data.val }

    }
}