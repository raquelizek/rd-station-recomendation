function RecommendationList({ recommendations }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
        <div className=" bg-[#1CBFDA] p-6">
          <div className="flex items-center gap-3">
           
            <div>
              <h3 className="text-lg font-bold text-white">Recomendações IA</h3>
              <p className="text-white text-sm">
                {recommendations.length > 0
                  ? `${recommendations.length} produto${recommendations.length > 1 ? "s" : ""} recomendado${recommendations.length > 1 ? "s" : ""}`
                  : "Aguardando configuração"}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {recommendations.length === 0 ? (
            <div className="text-center py-8">
            
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Pronto para Analisar</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Configure suas preferências e funcionalidades para receber recomendações personalizadas.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="group relative">
                  <div className="bg-[#e0f7fb] border-[#1CBFDA] rounded-xl p-4 ">
                    <div className="flex items-center gap-4">
                      
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg">{recommendation.name}</h4>
                        {recommendation.category && (
                          <span className="inline-block bg-[#6fdbec] text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                            {recommendation.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecommendationList
