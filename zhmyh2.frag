uniform vec2 resolution;
uniform sampler2D image;
uniform float time;

void main() {
	vec2 coord = gl_FragCoord.xy / resolution;

	coord.x += 0.01 * sin(3 * time + 50 * coord.x);
	coord.y += 0.01 * cos(3 * time + 50 * coord.y);

	gl_FragColor = vec4(texture(image, coord).rgb, 1.0);
}