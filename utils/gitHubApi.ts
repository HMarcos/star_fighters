import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com"
});

function getUserRepositoriesInfo(username: string) {
    return api.get(`/users/${username}/repos`);
}

const GitHubApi = {
    getUserRepositoriesInfo
}

export default GitHubApi;