<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Option extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $dates = ['deleted_at'];

    public function item()
    {
        return $this->hasMany(Item::class,'option_id');
    }

    public function category()
    {
        return $this->belongsToMany(Category::class,'option_categories','option_id','category_id');
    }

//    public function ()
//    {
//
//    }

//    check relation if parent exists on other table
    protected static function boot()
    {
        parent::boot();

        static::deleting(function($option) {
            $relationMethods = ['category'];   //add any method

            foreach ($relationMethods as $relationMethod) {
                if ($option->$relationMethod()->count() > 0) {
                    return false;
                }
            }
        });
    }
}
