<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class ProductPrice extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded=[];

    public function items()
    {
        return $this->hasMany(ProductPrice::class,'item_id');
    }
    public function item()
    {
        return $this->belongsTo(Item::class,'item_id');

    }
    public function prices($id)
    {
                $price=DB::select("SELECT
        items.id,  items.name AS item_name,
          product_prices.price AS price,product_prices.id AS id,product_prices.id as p_id,product_prices.created_at as created_at,product_prices.updated_at as updated_at,product_prices.status as status
        FROM items
        INNER JOIN product_prices
          ON items.id = product_prices.item_id
            WHERE product_prices.status = 1
            and product_prices.product_id = ".$id ?? null);
        return $price;
    }

}
