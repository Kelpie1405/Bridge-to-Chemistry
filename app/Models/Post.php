<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    
    // ローカルスコープの定義
    public function scopeFilterByCategory($query, $category)
    {
        if ($category === 'article') {
            return $query->where('category_id', '1')->with('level', 'field');
        } elseif ($category === 'column') {
            return $query->where('category_id', '2');
        }
    }
    
    public function scopeGetByLimit($query, $limit_count = 5)
    {
        return $query->orderBy('created_at', 'DESC')->limit($limit_count)->get();
    }
    
    
    // リレーションの定義
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
    public function level()
    {
        return $this->belongsTo(Level::class);
    }
    
    public function field()
    {
        return $this->belongsTo(Field::class);
    }
    
    public function quiz()
    {
        return $this->hasOne(Quiz::class);
    }
}
