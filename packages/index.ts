import Shape from './components/shape.vue';
import type { App } from 'vue';
export { Shape };

const shapeComponent = {
  install: (app: App) => {
    app.component('Shape', Shape);
  },
};

export default shapeComponent;
