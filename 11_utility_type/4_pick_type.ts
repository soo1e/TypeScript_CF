/**
 * Pick Type
 */

interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

function createPost(post: Pick<Post, 'title' | 'content'>): Post {
    return {
        ...post,
        createdAt: new Date(),
    };
}

// post에 모든 값을 입력하지 않고 필요한 키만 입력하도록 골라서 사용
createPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '나이 30 넘어서도 해볼만한가요?',
});