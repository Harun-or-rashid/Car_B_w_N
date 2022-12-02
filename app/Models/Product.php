<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable=['name','category_id','description','images','base_price','status','slug','price_controller'];

    public function images()
    {
        return $this->hasMany(Image::class,'product_id');
    }

    public function productImage($id)
    {
        $images=Image::where('product_id',$id)->where('status',1)->get();
        return $images;

    }

}
