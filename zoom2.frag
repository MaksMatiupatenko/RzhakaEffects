uniform vec2 resolution;
uniform sampler2D image;
uniform vec2 position;
uniform float power;

void main() {
	vec2 coord = gl_FragCoord / resolution;
	vec2 pos = position / resolution;

	coord = pos + (normalize(coord - pos) * pow(length(coord - pos), power));

	gl_FragColor = vec4(texture(image, coord).rgb, 1.0);
}