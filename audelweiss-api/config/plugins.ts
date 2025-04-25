export default () => ({
  vite: {
    // Ajoutez cette section pour configurer Vite
    server: {
      host: "0.0.0.0",
      port: 1337,
      // Autoriser l'accès depuis votre domaine
      allowedHosts: ["audelweiss.ageronjoachim.com", "localhost"],
    },
  },
});
