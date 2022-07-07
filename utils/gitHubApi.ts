import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com"
});

function getUserRepositoriesInfo(user: string) {
    return api.get(`/users/${user}/repos`);
}

const GitHubApi = {
    getUserRepositoriesInfo
}
export default GitHubApi;