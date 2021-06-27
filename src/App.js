import { Provider } from "react-redux";
import { configureStore } from "./models";

import CMS from "./CMS";

import "./styles.css";

const store = configureStore();

const App = () => {
	return (
		<Provider store={store}>
			<CMS />
		</Provider>
	);
};

export default App;
