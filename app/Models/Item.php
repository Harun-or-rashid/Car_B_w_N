<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded=[];
    protected $dates = ['deleted_at'];

    public function option()
    {
        return $this->belongsTo(Option::class);
    }

    public function category()
    {
        return $this->belongsToMany(Category::class);
    }

    public function price()
    {
        return $this->belongsTo(ProductPrice::class);
    }

    public function itemPrice($id)
    {
        $prices=ProductPrice::where('item_id',$id)->where('status',1)->get();
        return $prices;

    }

}
