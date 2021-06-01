import GetAPI from '../API/Get';
import PostAPI from '../API/Post';
import DeleteAPI from '../API/Delete';

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (dataYgDhapus) => DeleteAPI('posts', dataYgDhapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;