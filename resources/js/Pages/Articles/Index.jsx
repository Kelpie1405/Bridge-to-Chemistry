import React, { useState, useEffect } from "react";
import NormalLayout from '@/Layouts/NormalLayout';
import Accordion from '@/Components/Accordion';
import Card from '@/Components/Card';
import HeadingGroup from '@/Components/HeadingGroup';
import Searchbox from '@/Components/Searchbox';
import Selectbox from '@/Components/Selectbox';

const Index = (props) => {
    const { posts, fields, levels } = props;
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [selectedField, setSelectedField] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
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
            
        if (selectedField) {
            limitedPosts = limitedPosts.filter((post) => (
                post.field_id == selectedField
            ));
        }
        
        if (selectedLevel) {
            limitedPosts = limitedPosts.filter((post) => (
                post.level_id == selectedLevel
            ));
        }
        
        if (sortOrder == 'latest') {
            limitedPosts = limitedPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (sortOrder == 'oldest') {
            limitedPosts = limitedPosts.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }
        
        setFilteredPosts(limitedPosts);
    }, [posts, searchKeyword, selectedLevel, selectedField, sortOrder]);
    
    return (
        <NormalLayout>
            <HeadingGroup title='記事一覧'>クイズもあわせてお楽しみください♪</HeadingGroup>
            
            
            <Searchbox name='seachPosts' onChange={setSearchKeyword} placeholder='キーワード検索' />
            
            <Accordion header='詳細検索'>
                <Selectbox label='分野' name='field' options={fields} onChange={setSelectedField} />
                <Selectbox label='難易度' name='level' options={levels} onChange={setSelectedLevel} />
                <Selectbox label='並び替え' name='sortOrder' options={sortOrderOptions} onChange={setSortOrder} />
            </Accordion>
            
            
            {filteredPosts.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </NormalLayout>
    );
};

export default Index;