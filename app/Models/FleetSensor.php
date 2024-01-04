<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FleetSensor
 * 
 * @property int $id
 * @property int $fleet_id
 * @property int $sensor_attribute_id
 * @property float $value
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property Fleet $fleet
 * @property SensorAttribute $sensor_attribute
 * @property User|null $user
 *
 * @package App\Models
 */
class FleetSensor extends Model
{
	protected $table = 'fleet_sensors';
	protected $perPage = 10;

	protected $casts = [
		'fleet_id' => 'int',
		'sensor_attribute_id' => 'int',
		'value' => 'float',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'fleet_id',
		'sensor_attribute_id',
		'value'
	];

	public function fleet()
	{
		return $this->belongsTo(Fleet::class);
	}

	public function sensor_attribute()
	{
		return $this->belongsTo(SensorAttribute::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}
}
