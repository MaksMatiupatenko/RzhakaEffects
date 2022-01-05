uniform vec2 resolution;
uniform sampler2D image;

const float PI = 3.1415926535;

void main() {
	vec2 coord = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);

	const float acc = 0.003;

	bool isLine = false;
	for(float angle = 0; angle < PI; angle += PI / 20.0) {
		vec2 coord1 = coord + vec2(acc * cos(angle), acc * sin(angle));
		vec2 coord2 = coord - vec2(acc * cos(angle), acc * sin(angle));

		if(
			0.0 > coord1.x || coord1.x > 1.0 ||
			0.0 > coord1.y || coord1.y > 1.0 ||
			0.0 > coord2.x || coord2.x > 1.0 ||
			0.0 > coord2.y || coord2.y > 1.0) {
			
			continue;
		}

		vec3 col1 = texture(image, coord1).rgb;
		vec3 col2 = texture(image, coord2).rgb;

		const float eps = 0.1;

		if(abs(col1.r - col2.r) > eps) isLine = true;
		if(abs(col1.g - col2.g) > eps) isLine = true;
		if(abs(col1.r - col2.r) > eps) isLine = true;
	}

	if(isLine) gl_FragColor = vec4(vec3(0.0), 1.0);
	else gl_FragColor = vec4(vec3(1.0), 1.0);
}