<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CategoryOptionItem extends Model
{
    use HasFactory;

    protected $fillable = ['option_category_id', 'category_id', 'option_id', 'item_id', 'status'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function option()
    {
        return $this->belongsTo(Option::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
