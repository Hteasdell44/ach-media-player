async function callDeezer(songName) {

    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${songName}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7de1bf09f1msh467efbdb803e8ffp141cfbjsnc946e8a63d3b',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {

        const response = await fetch(url, options);

        const result = await response.json();

        const mp3File = `"${result.data[0].preview}"`;

        console.log(mp3File);

        return mp3File;

    } catch (error) {

        console.error(error);
    }
}

module.exports = {callDeezer};