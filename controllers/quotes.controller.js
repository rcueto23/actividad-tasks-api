let quotes = [
  'Si me ves corriendo, ¡corre tú también! Algo raro está pasando.',
  'Me levanté tan temprano que hasta el sol me dijo: “¡¿Ya tú?!”',
  'No sé si tengo hambre o solo necesito atención emocional',
  'A veces olvido lo que estoy diciendo en mitad de una... ¿hamburguesa?',
  'Si el WiFi se va, yo también',
  'Me caí de la cama y desperté en otro martes',
  'No quiero tus palabras si no son francas',
  'Solo tendré en cuenta tus críticas cuando seas un ejemplo a seguir',
  'No te deseo nada malo, no te tengo odio; eso sería un esfuerzo demasiado grande',
  'Si no tienes enemigos es señal de que la fortuna te ha olvidado',
  'El tiempo pone a cada uno en su lugar',
  'Cada día hablando menos y entendiendo más',
  'Las oportunidades pasan volando, por eso hay que estar siempre saltando'
];

module.exports = {

    GetAllQuotes: (request, response) => {
        response.json(quotes);
    },

    GetRandomQuote: (request, response) => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        response.json({ quote: quotes[randomIndex] });
    },

    AddQuote: (request, response) => {
        const { quote } = request.body;
        if (!quote) {
            return response.status(400).json({ error: "Debes enviar una frase" });
        }
        quotes.push(quote);
        response.json({ message: "Frase agregada con éxito" });
    },

}