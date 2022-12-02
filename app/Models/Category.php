<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded =[];
    protected $dates = ['deleted_at'];


    public function optionCategories()
    {
        return $this->hasMany(OptionCategory::class, 'category_id');
    }

    public function categoryOptionItems()
    {
        return $this->hasMany(CategoryOptionItem::class);
    }

//    public function options()
//    {
//        return $this->belongsToMany(CategoryOptionItem::class,'category_option_items','option_id','category_id');
//    }
//    public function items()
//    {
//        return $this->belongsToMany(Category::class,'category_option_items','item_id','category_id');
//    }
}
