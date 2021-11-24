import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            //get data from firebase
            await projectFirestore.collection('posts')
                .orderBy('createdAt', 'desc')
                .onSnapshot((snap) => {
                    let data = snap.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    });
                    posts.value = data;
                });
        } catch (err) {
            error.value = err.message;
        }
    };

    return { posts, error, load }
}

export default getPosts;