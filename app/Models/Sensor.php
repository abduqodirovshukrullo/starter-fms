<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Sensor
 * 
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property User|null $user
 * @property Collection|SensorAttribute[] $sensor_attributes
 *
 * @package App\Models
 */
class Sensor extends Model
{
	protected $table = 'sensors';
	protected $perPage = 10;

	protected $casts = [
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'name'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}

	public function sensor_attributes()
	{
		return $this->hasMany(SensorAttribute::class);
	}
}
