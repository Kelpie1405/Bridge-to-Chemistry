<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;
use App\Models\Level;
use App\Models\Field;
use Inertia\Inertia;

class PostController extends Controller
{
    public function indexToppage()
    {
        $posts = Post::with('category')->getByLimit(3);
        
        $articles = Post::filterByCategory('article')->getByLimit(4);
            
        $columns = Post::filterByCategory('column')->getByLimit(4);
        
        return Inertia::render('Toppage', [
            'posts' => $posts,
            'articles' => $articles,
            'columns' => $columns,
        ]);
    }
    
    public function indexArticles(Level $level, Field $field)
    {
        $posts = Post::where('category_id', '1')
            ->with('level', 'field')
            ->get();
        
        return Inertia::render('Articles/Index', [
            'posts' => $posts,
            'levels' => $level->get(),
            'fields' => $field->get(),
        ]);
    }
    
    public function showArticle(Post $post)
    {
        $post = $post->load('level', 'field', 'quiz');
        
        return Inertia::render('Articles/Show', ['post' => $post]);
    }
    
    public function indexColumns()
    {
        $columns = Post::filterByCategory('column')->get();
        
        return Inertia::render('Columns/Index', ['posts' => $columns]);
    }
    
    public function showColumn(Post $post)
    {
        return Inertia::render('Columns/Show', ['post' => $post]);
    }
}
