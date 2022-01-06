uniform vec2 resolution;
uniform sampler2D image;
uniform vec2 position;
uniform float power;
uniform float size;

void main() {
	vec2 coord = gl_FragCoord / resolution;
	vec2 pos = position / resolution;

	if(length(coord - pos) < size) coord  = pos + (coord - pos) / power;

	gl_FragColor = vec4(texture(image, coord).rgb, 1.0);
}