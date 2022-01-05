uniform vec2 resolution;
uniform sampler2D image;
uniform float time;

void main() {
	vec2 coord = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);

	vec3 color = texture(image, coord).rgb;

	color.r *= abs(sin(5 * time + coord.x));
	color.b *= abs(cos(5 * time + coord.y));

	gl_FragColor = vec4(color, 1.0);
}