const environment = {
    appName: 'Satta Matka App',
    production: false,
    baseURL: 'http://localhost:5000',
    apiURL: 'http://localhost:5000/api',
    profileUrl: 'https://your-sattamatka-backend.com/storage/images/profile/',
    idle: 30 * 60, // 30 minutes
  
    // Example wallet-related config (can be modified as needed)
    walletPrefix: 'SATTA_WALLET_',
  
    // Game-related endpoints
    gameEndpoints: {
      singleDigit: 'single-digit',
      singlePana: 'single-pana',
      doublePana: 'double-pana',
      halfSangam: 'half-sangam',
      fullSangam: 'full-sangam',
      triplePana: 'triple-pana',
    }
  };
  
  export default environment;
  