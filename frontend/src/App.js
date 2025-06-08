import { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import  AppHeader from './components/Home/AppHeader';
import  IntroSection  from './components/Home/IntroSection';

function App() {
  const [recommendationsForUser, setRecommendationsForUser] = useState([]);

  return (
    <div className="min-h-screen">
     <AppHeader />

      <main className="container mx-auto px-6 py-8">
       <IntroSection />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-3">
            <Form setRecommendationsForUser={setRecommendationsForUser} />
          </div>
          <div className="xl:col-span-1">
            <RecommendationList recommendations={recommendationsForUser} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
