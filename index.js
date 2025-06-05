import React, { useState } from 'react';

// Main App component
const App = () => {
  // State variables for story inputs
  const [theme, setTheme] = useState('');
  const [protagonistDilemma, setProtagonistDilemma] = useState('');
  const [symbolicWorldElements, setSymbolicWorldElements] = useState('');
  const [archetypalCharacters, setArchetypalCharacters] = useState('');
  const [generatedConceptualDraft, setGeneratedConceptualDraft] = useState(''); // Renamed for clarity
  const [llmGeneratedStorySegment, setLlmGeneratedStorySegment] = useState('');

  // State variables for LLM-generated suggestions and loading states
  const [expandedThemeSuggestion, setExpandedThemeSuggestion] = useState('');
  const [deepenedDilemmaSuggestion, setDeepenedDilemmaSuggestion] = useState('');
  const [envisionedWorldSuggestion, setEnvisionedWorldSuggestion] = useState('');
  const [characterInsightSuggestion, setCharacterInsightSuggestion] = useState('');

  const [isLoadingConceptualDraft, setIsLoadingConceptualDraft] = useState(false);
  const [isExpandingTheme, setIsExpandingTheme] = useState(false);
  const [isDeepeningDilemma, setIsDeepeningDilemma] = useState(false);
  const [isEnvisioningWorld, setIsEnvisioningWorld] = useState(false);
  const [isGettingCharacterInsights, setIsGettingCharacterInsights] = useState(false);
  const [isGeneratingStorySegment, setIsGeneratingStorySegment] = useState(false);

  const [message, setMessage] = useState('');

  // Simulated Gemini API Call
  const callGeminiLLM = async (prompt, setStateFunction, setLoadingFunction) => {
    setLoadingFunction(true);
    setStateFunction(''); // Clear previous suggestion
    setMessage('');

    // const apiKey = ""; // API key is provided by Canvas runtime
    // const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    // const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

    try {
        // const response = await fetch(apiUrl, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload)
        // });
        // const result = await response.json();
        // if (result.candidates && result.candidates.length > 0 &&
        //     result.candidates[0].content && result.candidates[0].content.parts &&
        //     result.candidates[0].content.parts.length > 0) {
        //     setStateFunction(result.candidates[0].content.parts[0].text);
        // } else {
        //     console.error("Unexpected LLM response structure:", result);
        //     setMessage("Erro ao gerar sugestão. Estrutura de resposta inesperada.");
        // }

        // --- Simulated LLM response ---
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        let simulatedResponse = "";
        if (prompt.includes("Expandir o tema")) {
            simulatedResponse = "Este tema pode explorar a efemeridade da existência, a beleza encontrada na imperfeição e a importância de nutrir o que é verdadeiramente essencial no meio da vastidão do universo. Pode focar na jornada do protagonista em aprender a valorizar o 'aqui e agora' em vez de buscar algo distante e inatingível.";
        } else if (prompt.includes("Aprofundar o dilema")) {
            simulatedResponse = "O dilema do protagonista pode ser intensificado pela sua incapacidade de se conectar profundamente com os outros, sentindo-se um estrangeiro em seu próprio mundo, ou pela sua luta em conciliar a lógica adulta pragmática com a pureza da visão infantil, levando-o a uma crise de identidade ou propósito existencial.";
        } else if (prompt.includes("Criar elementos simbólicos")) {
            simulatedResponse = "Considere um Rio de Memórias Esquecidas, onde o protagonista pode ver ecos de vidas passadas e futuras; uma Montanha Flutuante que representa o peso da responsabilidade e a leveza da libertação; ou uma Constelação de Emoções que muda de forma e brilho para refletir o estado emocional do universo e de seus habitantes.";
        } else if (prompt.includes("Detalhar personagens arquetípicos")) {
            simulatedResponse = "Um 'Filósofo dos Ventos', um ser etéreo que ensina sobre a impermanência e a aceitação; uma 'Costureira de Destinos', que tece os fios invisíveis que ligam as vidas, revelando a beleza da interconexão; ou um 'Colecionador de Lágrimas', que guarda as tristezas do mundo em frascos de cristal, ensinando sobre a beleza da vulnerabilidade.";
        } else if (prompt.includes("um segmento de história") && theme && protagonistDilemma) {
            simulatedResponse = `No alvorecer de um novo ciclo, onde o céu cintilava com a promessa de segredos por desvendar, o pequeno viajante, cujo coração se sentia um eco vazio na imensidão, ${protagonistDilemma}. Ele aterrissou seu diminuto veículo no Planeta do Silêncio, uma esfera de mármore polido onde apenas o murmúrio dos seus próprios pensamentos ousava quebrar a quietude. Ali, encontrou a sombra de um Guardião, um ser tão antigo quanto as estrelas, que parecia absorver a própria luz. "O que procuras nesta solitude?", sussurrou o Guardião, sem mover os lábios, a voz ressoando diretamente na alma do viajante. O viajante, hesitante, respondeu, a busca por significado em seu olhar: "Busco o que se perdeu entre o tempo e o esquecimento, a essência do que realmente importa."`;
        } else {
            simulatedResponse = "Por favor, preencha os campos para obter uma sugestão mais específica.";
        }
        setStateFunction(simulatedResponse);

    } catch (error) {
        console.error("Erro ao chamar a API Gemini:", error);
        setMessage("Erro na comunicação com o LLM.");
    } finally {
        setLoadingFunction(false);
    }
  };

  // Function to generate conceptual story (original functionality)
  const generateConceptualDraftStory = async () => {
    setIsLoadingConceptualDraft(true);
    setGeneratedConceptualDraft('');
    setMessage('');

    await new Promise(resolve => setTimeout(resolve, 2000));

    const storyOutput = `
      No coração de um universo à deriva, onde os astros guardavam segredos antigos e os ventos sussurravam canções esquecidas, o ELP (Echoes of the Little Prince) teceu uma narrativa que ecoa a profundidade do coração humano.

      **Tema Central:** "${theme || 'O Valor das Conexões Verdadeiras e a Redescoberta da Inocência Perdida'}".

      **Protagonista e Dilema:**
      Era uma vez um ser, "${protagonistDilemma || 'cujo coração se sentia vazio, perdido na busca incessante por algo que não sabia nomear.'}" Este protagonista, com a curiosidade de uma criança e a sabedoria de um ancião, embarcou em uma jornada que o levaria a desafiar as próprias percepções.

      **Mundo Simbólico:**
      Seu caminho o conduziu por terras e dimensões como "${symbolicWorldElements || 'um jardim de estrelas cadentes, uma floresta de espelhos que refletiam verdades ocultas, e um deserto onde as areias falavam do tempo e da eternidade.'}" Cada paisagem, minimalista em sua forma, era uma tela para a complexidade da alma.

      **Personagens Arquetípicos:**
      Ao longo de sua odisséia, o protagonista encontrou seres que personificavam facetas da condição humana:
      * Figuras de Orientação/Obstáculo: "${archetypalCharacters || 'um guardião do silêncio que ensinava sobre a escuta interior, um mercador de sonhos roubados que revelava a ilusão do possuir, e uma flor orgulhosa que mostrava a fragilidade da beleza.'}"
      Cada encontro era uma parábola, um espelho que refletia a jornada interior do protagonista.

      **A Jornada e a Mensagem:**
      Através de diálogos aparentemente simples, mas repletos de camadas de significado, o protagonista aprendeu sobre a natureza do amor, da amizade, da responsabilidade e da importância de "ver com o coração". A narrativa fluiu com um ritmo contemplativo, pontuado por momentos de epifania e profunda reflexão.

      **O Potencial de Impacto:**
      Esta história, com suas 100.000 palavras imaginadas pelo ELP, teria o potencial de tocar leitores de todas as idades, oferecendo uma leitura para a criança que busca aventura e uma meditação filosófica para o adulto que busca sentido. O final não seria uma conclusão, mas um convite à reflexão contínua sobre o que verdadeiramente importa.

      Lembre-se: o verdadeiro poder desta história reside na sua capacidade de evocar uma conexão emocional profunda e de inspirar o pensamento crítico, muito além das páginas.
    `;

    setGeneratedConceptualDraft(storyOutput);
    setMessage('O seu rascunho conceptual foi gerado com o poder do ELP! Ajuste os parâmetros para explorar novas possibilidades.');
    setIsLoadingConceptualDraft(false);
  };

  // Function to generate a story segment using LLM
  const generateLlmStorySegment = () => {
    const prompt = `Crie um segmento de história curto (100-150 palavras) que combine o seguinte:
    Tema: ${theme || 'o valor das conexões humanas'}
    Protagonista e Dilema: ${protagonistDilemma || 'um ser em busca de um propósito'}
    Elementos do Mundo: ${symbolicWorldElements || 'um pequeno asteróide desolado e uma rosa solitária'}
    Personagens/Encontros: ${archetypalCharacters || 'um aviador perdido e uma raposa sábia'}

    Foque em uma linguagem poética e simbólica, similar ao estilo de "O Pequeno Príncipe".`;
    callGeminiLLM(prompt, setLlmGeneratedStorySegment, setIsGeneratingStorySegment);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-800 text-white p-6 font-sans flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl p-8 space-y-8 border border-purple-700">
        <h1 className="text-4xl font-extrabold text-center text-purple-300 drop-shadow-lg mb-8">
          <span className="block text-2xl font-light text-gray-400">Gems Especialista:</span>
          Escritor de Livros ELP
        </h1>

        <div className="space-y-6">
          <div className="input-group">
            <label htmlFor="theme" className="block text-lg font-semibold text-purple-200 mb-2">Tema Central da História:</label>
            <input
              type="text"
              id="theme"
              className="w-full p-3 bg-gray-800 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all duration-300"
              placeholder="Ex: O valor das relações verdadeiras, a busca por significado"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
            <button
              onClick={() => callGeminiLLM(`Expandir o tema: "${theme}"`, setExpandedThemeSuggestion, setIsExpandingTheme)}
              className="mt-2 w-full py-2 px-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isExpandingTheme || !theme}
            >
              {isExpandingTheme ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : '✨ Expandir Tema'}
            </button>
            {expandedThemeSuggestion && (
              <p className="mt-2 text-sm text-purple-200 bg-gray-800 p-2 rounded-md border border-purple-500">{expandedThemeSuggestion}</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="protagonistDilemma" className="block text-lg font-semibold text-purple-200 mb-2">Protagonista e Dilema Inicial:</label>
            <textarea
              id="protagonistDilemma"
              rows="3"
              className="w-full p-3 bg-gray-800 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all duration-300 resize-y"
              placeholder="Ex: Um viajante solitário em busca de uma flor rara, um jovem que perdeu a capacidade de sonhar"
              value={protagonistDilemma}
              onChange={(e) => setProtagonistDilemma(e.target.value)}
            ></textarea>
            <button
              onClick={() => callGeminiLLM(`Aprofundar o dilema: "${protagonistDilemma}"`, setDeepenedDilemmaSuggestion, setIsDeepeningDilemma)}
              className="mt-2 w-full py-2 px-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isDeepeningDilemma || !protagonistDilemma}
            >
              {isDeepeningDilemma ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : '✨ Aprofundar Dilema'}
            </button>
            {deepenedDilemmaSuggestion && (
              <p className="mt-2 text-sm text-purple-200 bg-gray-800 p-2 rounded-md border border-purple-500">{deepenedDilemmaSuggestion}</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="symbolicWorldElements" className="block text-lg font-semibold text-purple-200 mb-2">Elementos do Mundo Simbólico:</label>
            <textarea
              id="symbolicWorldElements"
              rows="3"
              className="w-full p-3 bg-gray-800 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all duration-300 resize-y"
              placeholder="Ex: Pequenos planetas com um único habitante, um rio que flui para o passado, uma cidade de nuvens"
              value={symbolicWorldElements}
              onChange={(e) => setSymbolicWorldElements(e.target.value)}
            ></textarea>
            <button
              onClick={() => callGeminiLLM(`Criar elementos simbólicos para: "${symbolicWorldElements}"`, setEnvisionedWorldSuggestion, setIsEnvisioningWorld)}
              className="mt-2 w-full py-2 px-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isEnvisioningWorld || !symbolicWorldElements}
            >
              {isEnvisioningWorld ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : '✨ Visionar Mundo Simbólico'}
            </button>
            {envisionedWorldSuggestion && (
              <p className="mt-2 text-sm text-purple-200 bg-gray-800 p-2 rounded-md border border-purple-500">{envisionedWorldSuggestion}</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="archetypalCharacters" className="block text-lg font-semibold text-purple-200 mb-2">Personagens Arquetípicos/Encontros:</label>
            <textarea
              id="archetypalCharacters"
              rows="3"
              className="w-full p-3 bg-gray-800 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all duration-300 resize-y"
              placeholder="Ex: Um astrônomo cego que vê as estrelas com a alma, um artesão que constrói pontes para o coração, um guardião do silêncio"
              value={archetypalCharacters}
              onChange={(e) => setArchetypalCharacters(e.target.value)}
            ></textarea>
            <button
              onClick={() => callGeminiLLM(`Detalhar personagens arquetípicos para: "${archetypalCharacters}"`, setCharacterInsightSuggestion, setIsGettingCharacterInsights)}
              className="mt-2 w-full py-2 px-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isGettingCharacterInsights || !archetypalCharacters}
            >
              {isGettingCharacterInsights ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : '✨ Insights de Personagens'}
            </button>
            {characterInsightSuggestion && (
              <p className="mt-2 text-sm text-purple-200 bg-gray-800 p-2 rounded-md border border-purple-500">{characterInsightSuggestion}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={generateConceptualDraftStory}
            className="flex-1 py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoadingConceptualDraft}
          >
            {isLoadingConceptualDraft ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gerando Conceito...
              </span>
            ) : (
              'Gerar Rascunho Conceptual'
            )}
          </button>

          <button
            onClick={generateLlmStorySegment}
            className="flex-1 py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isGeneratingStorySegment || !(theme || protagonistDilemma || symbolicWorldElements || archetypalCharacters)}
          >
            {isGeneratingStorySegment ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gerando Segmento...
              </span>
            ) : (
              '✨ Gerar Segmento da História (LLM)'
            )}
          </button>
        </div>


        {message && (
          <div className="bg-blue-800 text-blue-200 p-4 rounded-lg text-center shadow-inner mt-6">
            {message}
          </div>
        )}

        {generatedConceptualDraft && (
          <div className="story-output bg-gray-800 border border-purple-700 rounded-lg p-6 shadow-xl mt-8">
            <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">Rascunho Conceptual da História:</h2>
            <div className="whitespace-pre-wrap text-gray-300 leading-relaxed max-h-96 overflow-auto custom-scrollbar">
              {generatedConceptualDraft}
            </div>
          </div>
        )}

        {llmGeneratedStorySegment && (
          <div className="story-output bg-gray-800 border border-blue-700 rounded-lg p-6 shadow-xl mt-8">
            <h2 className="text-2xl font-bold text-blue-300 mb-4 text-center">Segmento da História Gerado por LLM:</h2>
            <div className="whitespace-pre-wrap text-gray-300 leading-relaxed max-h-96 overflow-auto custom-scrollbar">
              {llmGeneratedStorySegment}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
