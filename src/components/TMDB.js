const API_KEY = process.env.REACT_APP_API_KEY
const apiBase = "https://api.themoviedb.org/3"

const apiReq = async (endpoint) => {
	const resp = await fetch(`${apiBase}${endpoint}`)
	const json = await resp.json()
	return json;
}

const tmdb = {
	getHomeList : async () =>{
		return [
			{
				id:0,
				name:"Trending",
				items: await apiReq(`/movie/popular?api_key=${API_KEY}`)
			},

			{
				id:28,
				name:"Action",
				items: await apiReq(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
			},
			{
				id:12,
				name:"Adventure",
				items: await apiReq(`/discover/movie?with_genres=12&api_key=${API_KEY}`)
			},
			{
				id:16,
				name:"Animation",
				items: await apiReq(`/discover/movie?with_genres=16&api_key=${API_KEY}`)
			},
			{
				id:35,
				name:"Comedy",
				items: await apiReq(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
			},
			{
				id:80,
				name:"Crime",
				items: await apiReq(`/discover/movie?with_genres=80&api_key=${API_KEY}`)
			},
			{
				id:99,
				name:"Documentary",
				items: await apiReq(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
			},
			{
				id:18,
				name:"Drama",
				items: await apiReq(`/discover/movie?with_genres=18&api_key=${API_KEY}`)
			},
			{
				id:10751,
				name:"Family",
				items: await apiReq(`/discover/movie?with_genres=10751&api_key=${API_KEY}`)
			},
			{
				id:14,
				name:"Fantasy",
				items: await apiReq(`/discover/movie?with_genres=14&api_key=${API_KEY}`)
			},
			{
				id:36,
				name:"History",
				items: await apiReq(`/discover/movie?with_genres=36&api_key=${API_KEY}`)
			},
			{
				id:27,
				name:"Horror",
				items: await apiReq(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
			},
			{
				id:10402,
				name:"Music",
				items: await apiReq(`/discover/movie?with_genres=10402&api_key=${API_KEY}`)
			},
			{
				id:9648,
				name:"Mystery",
				items: await apiReq(`/discover/movie?with_genres=9648&api_key=${API_KEY}`)
			},
			{
				id:10749,
				name:"Romance",
				items: await apiReq(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
			},
			{
				id:878,
				name:"Science Fiction",
				items: await apiReq(`/discover/movie?with_genres=878&api_key=${API_KEY}`)
			},
			{
				id:10770,
				name:"TV Movie",
				items: await apiReq(`/discover/movie?with_genres=10770&api_key=${API_KEY}`)
			},
			{
				id:53,
				name:"Thriller",
				items: await apiReq(`/discover/movie?with_genres=53&api_key=${API_KEY}`)
			},
			{
				id:10752,
				name:"War",
				items: await apiReq(`/discover/movie?with_genres=10752&api_key=${API_KEY}`)
			},
			{
				id:37,
				name:"Western",
				items: await apiReq(`/discover/movie?with_genres=37&api_key=${API_KEY}`)
			},
		]
	},

	getMovieInfo : async (movieId) => {
		let info = await apiReq(`/movie/${movieId}?api_key=${API_KEY}`)
		let tv = await apiReq(`/tv/${movieId}?api_key=${API_KEY}`)
		if(info.status_code && tv.status_code){
			return "false"
		}else if(info.status_code){
			if(!tv.status_code){
				console.log(tv)
				return tv
			}
		}
		return info
	},


	getMovieByGenre : async (id,page) => {
		if(id === 0){
			return await apiReq(`/movie/popular?api_key=${API_KEY}&page=${page}`)
		}
		 return await apiReq(`/discover/movie?with_genres=${id}&api_key=${API_KEY}&page=${page}`)
	},

	getTrailer : async (id) => {
		let result = await apiReq(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`) 
		if(result.status_code){
			return "false"
		}else if(result.results.length === 0){
			return 'false'
		}else{
			return result.results[0].key
		}
	},

	getCast : async (id) => {
		let cast = await apiReq(`/movie/${id}/credits?api_key=${API_KEY}`)
		return cast
	}

}


export default tmdb