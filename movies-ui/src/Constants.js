const prod = {
  url: {
    KEYCLOAK_BASE_URL: "http://localhost:9090",
    API_BASE_URL: 'http://localhost:8080',
    OMDB_BASE_URL: 'https://www.omdbapi.com',
    AVATARS_DICEBEAR_URL: 'https://api.dicebear.com/6.x'
  }
}

const dev = {
  url: {
    KEYCLOAK_BASE_URL: "http://localhost:9090",
    API_BASE_URL: 'http://localhost:8080',
    OMDB_BASE_URL: 'https://www.omdbapi.com',
    AVATARS_DICEBEAR_URL: 'https://api.dicebear.com/6.x'
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod