import SearchComponent from './components/search';

function App() {
    const items = ['hhhh', 'anglais', 'gda', 'audry', 'jule', 'david', 'balavane', 'daniel'];

    return (
        <div>
            <h1>Recherchez dans la liste</h1>
            <SearchComponent items={items} />
        </div>
    );
}

export default App;
