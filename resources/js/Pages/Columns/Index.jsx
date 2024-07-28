import React, { useState, useEffect } from "react";
import NormalLayout from '@/Layouts/NormalLayout';
import Accordion from '@/Components/Accordion';
import Card from '@/Components/Card';
import HeadingGroup from '@/Components/HeadingGroup';
import Searchbox from '@/Components/Searchbox';
import Selectbox from '@/Components/Selectbox';

const Index = (props) => {
    const { posts } = props;
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [sortOrder, setSortOrder] = useState('latest');
    
    const sortOrderOptions = [
        {id: 'latest', name: '最新順'},
        {id: 'oldest', name: '古い順'}
    ];
    
    useEffect(() => {
        let limitedPosts = posts;
        
        if (searchKeyword) {
            const keyword = searchKeyword.toLowerCase();
            
            limitedPosts = limitedPosts.filter((post) => 
                post.title.toLowerCase().includes(keyword) ||
                post.body.toLowerCase().includes(keyword)
            );
        }
        
        if (sortOrder == 'latest') {
            limitedPosts = limitedPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (sortOrder == 'oldest') {
            limitedPosts = limitedPosts.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }
        
        setFilteredPosts(limitedPosts);
    }, [posts, searchKeyword, sortOrder]);
    
    return (
        <NormalLayout>
            <HeadingGroup title='コラム記事一覧'>くすっと笑えてもらえれば嬉しいです♪</HeadingGroup>
            
            
            <Searchbox name='seachPosts' onChange={setSearchKeyword} placeholder='キーワード検索' />
            
            <Accordion header='詳細検索'>
                <Selectbox label='並び替え' name='sortOrder' options={sortOrderOptions} onChange={setSortOrder} />
            </Accordion>
            
            
            {filteredPosts.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </NormalLayout>
    );
};

export default Index;