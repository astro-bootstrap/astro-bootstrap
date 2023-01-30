import Tabs from './TabsDefault.astro';
import List from './TabsList.astro';
import Item from './TabsItem.astro';
import Content from './TabsContent.astro';
import Pane from './TabsPane.astro';

export default Object.assign(Tabs, { List, Item, Content, Pane });
